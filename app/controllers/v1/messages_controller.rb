class V1::MessagesController < ApplicationController
  def index
    msg = Message.order(Arel.sql('RANDOM()')).first
    render json: { msg: }.to_json
  end
end
