
Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    if Rails.env.production?
        origins 'https://qiita-todo.firebaseapp.com' 
    else 
        origins 'http://localhost:3000'
    end
   

    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end