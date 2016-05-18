Rails.application.routes.draw do

  mount Mercury::Engine => '/'
  mount Ckeditor::Engine => '/ckeditor'

  devise_for :cezars

  namespace :cezar do

    resources :dashboard,      only: [:index]
    resources :articles
    resources :settings_pages, only: [:edit, :update]
    resources :messages,     except: [:edit, :create, :update]

    get '/', to: 'dashboard#index'
  end

  resources :pages,    only: [:show, :update]
  resources :messages, only: [:create]

  resources :articles, only: [:show]

  root 'pages#show', id: '1'
end
