class ApplicationController < ActionController::Base
  include Mercury::Authentication
  protect_from_forgery with: :exception

  before_action :configure_permitted_parameters, if: :devise_controller?

  layout :layout_by_resource

  protected

    def configure_permitted_parameters
      devise_parameter_sanitizer.permit(:sign_in) do |cezar_params|
        cezar_params.permit(:email,
                            :password)
      end
    end

    def layout_by_resource
      if devise_controller?
        "layout_name_for_cezar"
      else
        "application"
      end
    end
end
