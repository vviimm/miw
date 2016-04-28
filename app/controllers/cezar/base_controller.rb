class Cezar::BaseController < ApplicationController

  before_action :authenticate_cezar!

  layout "cezar"
end
