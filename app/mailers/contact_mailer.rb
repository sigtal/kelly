class ContactMailer < ApplicationMailer

  def receive_request(contact)
    @contact = contact
    mail to: ENV['GMAIL_USER'],from: 'from@example.com' ,subject: 'HPからのご依頼'
  end
end
