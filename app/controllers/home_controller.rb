class HomeController < ApplicationController
  def top
    @contact = Contact.new
  end
  def contact
    @contact = Contact.new(contact_params)
  if @contact.save
    ContactMailer.receive_request(@contact).deliver_now
    redirect_to('/')
  else
    render :top
  end
  end

  private
    def contact_params
      params.require(:contact).permit(:email,:budget,:content)
    end
end
