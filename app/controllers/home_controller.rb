class HomeController < ApplicationController
  before_action :admin_user, only: [:create,:delete]

  def top
    @contact = Contact.new
    @illust = Illust.new
    @illusts = Illust.page(params[:page]).per(20)
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


  def create
    @illust = Illust.new(illust_params)
    @illust.save
    redirect_to '/'
  end
  def delete
    @illust = Illust.find_by(id: params[:id])
    @illust.destroy
    redirect_to '/'
  end
  private
    def contact_params
      params.require(:contact).permit(:email,:budget,:content)
    end
    def illust_params
      params.require(:illust).permit(:name,:avatar,:fullimage)
    end
    def admin_user
      redirect_to(root_url) unless current_user
    end
end
