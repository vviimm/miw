Rails.application.routes.draw do

  devise_for :cezars

  namespace :cezar do

    resources :dashboard, only: [:index]

    get '/', to: 'dashboard#index'
  end

  root 'clean_blogs#index'
  get  'about',   to: 'clean_blogs#about'
  get  'post',    to: 'clean_blogs#post'
  get  'contact', to: 'clean_blogs#contact'

end
