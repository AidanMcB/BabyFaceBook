class BabiesController < ApplicationController

    def index 
        babies = Baby.all 
        render(json: babies)
    end
    
    def show
        baby = Baby.find(params[:id])
        render(json: baby)
    end

    def create 
        baby = Baby.create({
            name: params[:name],
            weight: params[:weight],
            img: params[:img],
            gender: params[:gender],
            likes: params[:likes],
            dob: params[:dob]
        })
        render(json: baby)
    end

    def update 
        baby = Baby.find(params[:id])
        baby.update({
            name: params[:name],
            img: params[:img],
        })
    end 

    def destroy 
        baby = Baby.find(params[:id])
        baby.delete
    end

end


