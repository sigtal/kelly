Rails.application.routes.draw do
  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/', to: 'home#top'
  post '/', to: 'home#contact'
  post '/createillust', to: 'home#createIllust'
  post '/createtag', to: 'home#createTag'
  delete '/:id', to: 'home#delete'
  get 'post/:id', to: 'post#show'
  root 'home#top'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
