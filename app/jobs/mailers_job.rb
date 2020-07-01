class MailersJob < ApplicationJob
  queue_as :default

  def perform(contact)
    # Do something later
    @contact = contact
    
  end
end
