class Cezar::PagesController < Cezar::BaseController

  before_action :get_page, only: [:edit, :destroy]

  def index
    @pages = Page.order("position ASC")

  end

  def new
    @page = Page.new
  end

  def edit
  end

  def create
    @pages = Page.all
    @page = Page.new(page_params)
    @page.save
  end

  def update_position
    instruction = params[:_json]

    instruction.each.with_index(1) do |value, index|
      page = Page.find(value[:item_id])
      page.position  = index
      page.parent_id = value[:parent_id]
      page.save
    end
  end

  def refresh_part
    @pages = Page.order("position ASC")
  end

  def destroy
    @page.destroy
  end

private
  def get_page
    @page = Page.find(params[:id])
  end

  def page_params
    params.require(:page).permit(:name, :content)
  end
end
