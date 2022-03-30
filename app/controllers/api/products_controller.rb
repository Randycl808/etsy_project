class Api::ProductsController < ApplicationController

#defines the CRUD actions before using them
before_action :set_product, only: [:show, :destroy, :update]


  def index 
    render json: Product.all
  end

  def show 
    render json: @product
  end

  def create 
      product = Product.new(product_params)
      if(product.save)
        render json: product
      else
        render json: {errors: product.errors.full_messages}, status: 422
      end
  end

  def update 
    if(@product.update(product_params))
      render json: @product
    else
      render json: {errors: @product.errors.full_messages}, status: 422
   end
  end

  def destroy 
    render json: @product.destroy
  end

  private
  #function that allows @seller to find specific seller
  def set_product
      @product = Product.find(params[:id])
  end

  def product_params
    params.require(:product).permit(:price, :description, :category, :name, :seller_id)
end
end
