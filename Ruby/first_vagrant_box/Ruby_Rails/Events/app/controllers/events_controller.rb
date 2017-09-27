class EventsController < ApplicationController

  def index
    @users = current_user
    @events = Event.all
    @state_events = Event.where('state=?', current_user.state)
    @out_of_state = Event.where.not('state=?', current_user.state)
  end

  def new
  end

  def create
    @user = User.find(session[:user_id])
    @events = Event.create(
      name: params[:name],
      date: params[:date],
      location: params[:location],
      state: params[:state],
      user: @user)

    if @events.valid?
      redirect_to "/events/index"
    else
      flash[:errors] = @events.errors.full_messages
      redirect_to :back
    end
  end

  def show
    @event = Event.find(params[:id])
    @participant = Participate.where(event: @event)
    # @participant = Participate.all
    @comments = Comment.all
    puts "*****************************************"
    puts "i am marco"
    # puts @participant[0].user.first_name
    puts "*****************************************"
  end

  def join
    @user = User.find(session[:user_id])
    @event = Event.find(params[:id])
    puts @event
    Participate.create(user: @user, event: @event)

    redirect_to :back
  end

  def cancel
    Participate.find_by(user_id: session[:user_id], event_id: params[:id]).destroy
    redirect_to :back
  end

  def update
    @event = Event.find(params[:id])
    puts "+=+=+=++++++++++++++=+=+=+=+=+=+="
    puts @event.name
    puts "+=+=+=++++++++++++++=+=+=+=+=+=+="
    @event.update_attributes(
      name: params[:name],
      date: params[:date],
      location: params[:location],
      state: params[:state])

    if @event.valid?
      redirect_to '/events/index'
    else
      flash[:errors] = @event.errors.full_messages
      redirect_to :back
    end
  end

  def edit
    @event = Event.find(params[:id])
    puts "*************************"
    puts @event.id
    puts "*************************"

  end

  def destroy
    Event.find(params[:id]).destroy
    redirect_to :back
  end

end
