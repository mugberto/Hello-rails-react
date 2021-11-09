class V1::GreetingsController < ApplicationController
  def show_random
    highest_id = Greeting.last.id
    id_range = ((highest_id - 4)..highest_id)
    render json: Greeting.find(rand(id_range)).to_json
  end
end
