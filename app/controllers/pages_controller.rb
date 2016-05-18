class PagesController < ApplicationController

  layout 'clean_blog'

  def show
    @pages = Page.order("id ASC")

    @page = Page.find(params[:id])
    if @page.name == "home"
      @articles = Article.order("updated_at DESC")
    elsif @page.name == "contact"
      @message = Message.new
    end
  end

  def update
    @page = Page.find(params[:id])

    unless @page.name == "home"
      @page.content = params[:content][:page_content][:value]
      @page.save!
    end


    @page.settings_page.title = params[:content][:page_title][:value]
    @page.settings_page.subtitle = params[:content][:page_subtitle][:value]
    @page.settings_page.save!
    render text: ""
  end
end
