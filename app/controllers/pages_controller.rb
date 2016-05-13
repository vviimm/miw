class PagesController < ApplicationController

  layout 'clean_blog'

  def show
    @page = Page.find(params[:id])
    if @page.name == "home"
      @articles = Article.order("updated_at DESC")
    end
  end

  def update
    page = Page.find(params[:id])
    page.settings_page.title = params[:content][:page_title][:value]
    page.settings_page.subtitle = params[:content][:page_subtitle][:value]
    page.settings_page.save!
    render text: ""
  end
end
