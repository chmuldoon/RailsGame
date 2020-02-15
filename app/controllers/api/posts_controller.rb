class Api::PostsController < ApplicationController
  def create
    @post = Post.new(post_params)
    @post.author_id = current_user.id
    if @post.save
      @posts = Post.all
      render :index
    else
      render json: @post.errors.full_messages, status: 422
    end
    
  end

  def index
    #Later we can add following dependency here
    @posts = Post.all
    render :index
  end

 def show
    @post = Post.with_attached_photo.find(params[:id])
    # add .with_attached_photo. when you can
    render :show
  end

  # def update

  # end

  def destroy
    @post = Post.find(params[:id])
    if @post.destroy
      render :index
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

 

  def post_params
    params.require(:post).permit(:author_id, :caption, :photo)
    ##add :photo when you can
  end
end
