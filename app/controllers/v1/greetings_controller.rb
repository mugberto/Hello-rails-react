class V1::GreetingsController < ApplicationController
  def show_random
    render json: Greeting.find(rand(1..5)).to_json
  end
end
