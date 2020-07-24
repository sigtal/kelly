class HomeController < ApplicationController
  before_action :admin_user, only: [:create,:delete]
  @cotents = 2

  def top
    @contact = Contact.new
    @illust = Illust.new
    @tag = Tag.new
    @tags = Tag.all
    @illusts = Illust.page(params[:page]).per(cotents_part)
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
  def delete
    @illust = Illust.find_by(id: params[:id])
    @illust.destroy
    redirect_to '/'
  end
  def selectTag
    if params[:categories] == "all"
      @illusts = Illust.page(params[:page]).per(cotents_part)
    else
      @illusts = Illust.where("categories LIKE ?", "%#{params[:category]}%").page(params[:page]).per(cotents_part)
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
    def cotents_part
      # request.env["HTTP_USER_AGENT"]
      return 2
    end
    def admin_user
      redirect_to(root_url) unless current_user
    end
end
