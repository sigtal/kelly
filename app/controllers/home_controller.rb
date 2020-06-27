class HomeController < ApplicationController
  def top
    @contact = Contact.new
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

  private
    def contact_params
      params.require(:contact).permit(:email,:budget,:content)
    end
end
