class Api::SellersController < ApplicationController

#defines the CRUD actions before using them
before_action :set_seller, only: [:show, :destroy, :update]


  def index 
    render json: Seller.all
  end

  def show 
    render json: @seller
  end

  def create 
      seller = Seller.new(seller_params)
      if(seller.save)
        render json: seller
      else
        render json: {errors: seller.errors.full_messages}, status: 422
      end
  end

  def update 
    if(@seller.update(seller_params))
      render json: @seller
    else
      render json: {errors: @seller.errors.full_messages}, status: 422
   end
  end

  def destroy 
    render json: @seller.destroy
  end

  private
  #function that allows @seller to find specific seller
  def set_seller
      @seller = Seller.find(params[:id])
  end

  def seller_params
    params.require(:seller).permit(:first_name, :last_name, :email)
end
end
