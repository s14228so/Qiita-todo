class V1::TodosController < ApplicationController
    def create
      todo = Todo.new(todo_params)
      if todo.save
        render json: todo, status: :created
      else
        render json: todo.errors, status: :unprocessable_entity
      end
    end
  
    private
      def todo_params
        params.require(:todo).permit(:title, :user_id, :is_done)
      end
end
