Rails.application.routes.draw do
  root 'clean_blogs#index'
  get  'about',   to: 'clean_blogs#about'
  get  'post',    to: 'clean_blogs#post'
  get  'contact', to: 'clean_blogs#contact'
end
