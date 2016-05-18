class Cezar::MessagesController < Cezar::BaseController

  before_action :set_message, only: [:show, :destroy]

  def index
    @messages = Message.order("created_at DESC")
  end

  def show
  end

  def destroy
    @message.destroy
  end

private

  def set_message
    @message = Message.find(params[:id])
  end
end
