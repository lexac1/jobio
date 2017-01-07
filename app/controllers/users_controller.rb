class UsersController < ApplicationController
  protect_from_forgery with: :exception
  def show 
   if !current_user
   	  redirect_to "users/sign_in"
   end	  
  end 

  
end
