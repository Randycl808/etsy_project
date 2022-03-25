# frozen_string_literal: true

class User < ActiveRecord::Base
# liked_cats is text in our DB, but we want to treat it like
# an array so we 'serialize'
serialize :liked_cats, Array

# grab all unliked cats
# ids: list of users liked cats
def self.random_cat(ids)
 ids = ids.empty? ? [0] : ids
 Cat.where("id NOT IN (?)", ids).order("RANDOM()")
end

# grab all liked cats 
# ids: list of users liked cats
def self.liked(ids)
  ids = ids.empty? ? [0] : ids
  Cat.where("id IN (?)", ids)
end

  #add this to user.rb
  extend Devise::Models
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  include DeviseTokenAuth::Concerns::User
end
