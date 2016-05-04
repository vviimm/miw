class Cezar::DashboardController < Cezar::BaseController

  def index
    @articles = Article.order("created_at DESC")
  end
end
