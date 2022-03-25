class Api::CatsController < ApplicationController
  #devise_token_auth here
  # check the token that was sent in request
  # if token is valid it will set this current_user
  # as the logged user making the request
  # if token is invalid send back 401 error
  before_action :authenticate_user!
 
  # return the 'logged in': current_user
  def index
    render json: current_user
  end

  def update
  end
end
