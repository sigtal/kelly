class ContactMailer < ApplicationMailer

  def receive_request(contact)
    @contact = contact
    mail to: ENV['FROM_CONTACT'],from: 'from@example.com' ,subject: "HPからの" + @contact.title 
  end
end
