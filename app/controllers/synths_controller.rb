class SynthsController < ApplicationController

    def create 
        synth = Synth.create(synth_params)
        render json: synth
    end

    def index 
        synths = Synth.all 
        render json: synths
    end

    def show
        synth = Synth.find_by(id: params[:id])
        render json: synth 
    end
    private

    def synth_params
        params.permit(:name, :reverb, :distortion, :feedBack)
    end
end
