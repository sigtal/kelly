class PostController < ApplicationController
  def show
    @illust = Illust.find_by(id: params[:id])
  end
end
