require_relative '../practiceuser'
require 'yaml'

require 'spec_helper'

describe Practiceuser do 



before :each do 
	@practiceuser = Practiceuser.new "firstname", "lastname", "email", "country"
end

describe "#new" do 
	it "takes four parameters and returns a practiceuser object" do
		@practiceuser.should be_an_instance_of Practiceuser
	end
end 



end

