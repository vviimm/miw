class Cezar::SettingsPagesController < Cezar::BaseController

  before_action :get_page, only: [:edit, :update]

  def edit
  end

  def update
    @settings_page.update_column(:banner, params[:banner])
  end

  private

    def get_page
      @page = Page.find(params[:id])
    end

    def settings_page_params
      params.require(:settings_page).permit(:banner)
    end

end
