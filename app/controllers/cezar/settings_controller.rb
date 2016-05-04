class Cezar::SettingsController < ApplicationController

  before_action :authenticate_cezar!

  layout "clean_blog"

  def index
  end
end
