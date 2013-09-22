require_relative '../student'
require 'yaml'
require 'spec_helper'

describe Student do 

	it "should have a user id" do 
		student = Student.new
		student.userid.should != nil
	end


end