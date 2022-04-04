class Api::BuyersController < ApplicationController

#defines the CRUD actions before using them
before_action :set_buyer, only: [:show, :destroy, :update]


  def index 
    render json: Buyer.all
  end

  def show 
    render json: @buyer
  end

  def create 
      buyer = Buyer.new(buyer_params)
      if(buyer.save)
        render json: buyer
      else
        render json: {errors: buyer.errors.full_messages}, status: 422
      end
  end

  def update 
    if(@buyer.update(buyer_params))
      render json: @buyer
    else
      render json: {errors: @buyer.errors.full_messages}, status: 422
   end
  end

  def destroy 
    render json: @buyer.destroy
  end

  private
  #function that allows @seller to find specific buyer
  def set_buyer
      @buyer = Buyer.find(params[:id])
  end

  def buyer_params
    params.require(:buyer).permit(:first_name, :last_name, :max_price, :category, :seller_id)
end
end
