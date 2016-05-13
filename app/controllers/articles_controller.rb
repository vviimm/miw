class ArticlesController < ApplicationController
  layout "clean_blog"

  def show
    @article = Article.find(params[:id])
  end
end
