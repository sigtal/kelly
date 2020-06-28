class SessionsController < ApplicationController
  def new
  end
  def create
    user = Admin.find_by(name: params[:name] ,email: params[:email])
    if user && user.authenticate(params[:password])
      login user
      redirect_to '/'
    else
      render 'new'
    end
  end
  def destroy

  end
end
