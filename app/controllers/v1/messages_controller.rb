class V1::MessagesController < ApplicationController
    def index
      msg = Message.all.sample
      render json: { msg: }.to_json
    end
end