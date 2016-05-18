class ArticlesController < ApplicationController
  layout "clean_blog"

  def show
    @pages = Page.order("id ASC")
    @article = Article.find(params[:id])
  end
end
