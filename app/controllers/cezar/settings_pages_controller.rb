class Cezar::SettingsPagesController < ApplicationController

  before_action :authenticate_cezar!

  layout "clean_blog"

  before_action :get_page, except: [:create]

  def edit
  end

  def create
    @settings_page = SettingsPage.new(settings_page_params)
    @settings_page.save
  end

  def update
    @page.settings_page.banner = params[:banner]
    @page.settings_page.save
  end

  private

    def get_page
      @page = Page.find(params[:id])
    end

    def settings_page_params
      params.require(:settings_page).permit(:page_id, :title, :subtitle, :banner)
    end

end
