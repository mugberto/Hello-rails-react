Rails.application.routes.draw do
  root 'static#index'

  get '*page', to: 'static#index', constraints: ->(req) do 
    !req.xhr? && req.format.html?
  end

  namespace :v1, default: { format: 'json' } do
    get 'greet', to: 'greetings#show_random'
  end
end
