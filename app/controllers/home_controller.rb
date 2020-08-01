class HomeController < ApplicationController
  before_action :admin_user, only: [:create,:delete]
  @cotents = 2

  def top
    @contact = Contact.new
    @illust = Illust.new
    @tag = Tag.new
    @tags = Tag.all
    @illusts = Illust.all.order(id: :desc).page(params[:page]).per(cotents_part)
    respond_to do |format|
      format.html
      format.js { render 'shared/pagination'}
    end
  end
  def contact
    @contact = Contact.new(contact_params)

    respond_to do |format|
      if @contact.save
        ContactMailer.receive_request(@contact).deliver_now
        format.html
        format.js { render 'shared/success'}
      else
        format.html
        format.js { render 'shared/error' }
      end
    end
  end
  def createIllust
    @illust = Illust.new(illust_params)
    @illust.save
    redirect_to '/'
  end
  def createTag
    @tag = Tag.new(tag_params)
    @tag.save
    redirect_to '/'
  end
  def deleteIllust
    @illust = Illust.find_by(id: params[:id])
    @illust.destroy
    redirect_to '/'
  end
  def deleteTag
    @tag = Tag.find_by(id: params[:id])
    @tag.destroy
    redirect_to '/'
  end
  def selectTag
    if params[:categories] == "all"
      @illusts = Illust.page(params[:page]).per(cotents_part)
    else
      @tag = Tag.find_by(category: params[:category])
      @illusts = Illust.where("categories LIKE ?", "%@#{@tag.category}#{@tag.id}%").order(id: :desc).page(params[:page]).per(cotents_part)
    end
    @tags = Tag.all
    @select = Tag.find_by(category: params[:category])
    respond_to do |format|
      format.html
      format.js { render 'shared/pagination'}
    end
  end
  private
    def contact_params
      params.require(:contact).permit(:email,:budget,:content)
    end
    def illust_params
      params.require(:illust).permit(:name,:fullimage,:thumb, categories: [])
    end
    def tag_params
      params.require(:tag).permit(:category)
    end
    def cotents_part
      mobile = request.env["HTTP_USER_AGENT"]
      if(mobile.include?('Mobile') || mobile.include?('Android'))
        return 8
      else
        return 12
      end
    end
    def admin_user
      redirect_to(root_url) unless current_user
    end
end
