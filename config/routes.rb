Rails.application.routes.draw do
  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/', to: 'home#top'
  post '/', to: 'home#contact'
  post '/createillust', to: 'home#createIllust'
  post '/updateillust/:id', to: 'home#updateIllust'
  post '/createtag', to: 'home#createTag'
  delete '/tag/:id', to: 'home#deleteTag'
  get '/:category', to:'home#selectTag'
  delete '/illust/:id', to: 'home#deleteIllust'
  get 'post/:id', to: 'post#show'
  root 'home#top'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
