class Cezar::ArticlesController < Cezar::BaseController

  before_action :set_article, only: [:show, :edit, :update, :destroy]

  def index
    @articles = Article.order("updated_at DESC")
  end

  def show
  end

  def new
    @article = Article.new
  end

  def edit
  end

  def create
    @article = Article.new(article_params)
    @article.save
  end

  def update
    @article.update_attributes(article_params)
  end

  def destroy
    @article.destroy
  end

private

  def set_article
    @article = Article.find(params[:id])
  end

  def article_params
    params.require(:article).permit(:title, :theme, :image, :body)
  end
end
