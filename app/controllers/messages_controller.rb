class MessagesController < ApplicationController

  layout 'clean_blog'

  def create
    @message = Message.new(message_params)

    if verify_recaptcha(model: @message)
      @message.save
    end
  end

private

  def message_params
    params.require(:message).permit(:name, :email, :phone, :content)
  end
end
