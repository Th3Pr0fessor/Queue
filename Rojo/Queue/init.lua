--// Services
local HttpService = game:GetService('HttpService')

--// Modules
local Signal = require(script.Signal)

--// Class
local Queue: {} = {}
Queue.__index = Queue

function Queue.new()
	
	local Settings = {
		CanCall = true,

		ToCall = {},
		Called = {},
		
		Calling = Signal.new()
	}
	
	setmetatable(Settings, Queue)
	
	return Settings
end

function Queue:ListQueue()
	for i, v in pairs(self.ToCall) do
		print(i, v[1], v[2])
	end
end

function Queue:ListCalled()
	for _, Action in pairs(self.Called) do
		print(_, Action.ID)
	end
end

function Queue:AdjustQueue()
	for i = 1, #self.ToCall do
		if i == 1 then
			self.ToCall[i] = nil
		else
			self.ToCall[i-1] = self.ToCall[i]
			self.ToCall[i] = nil
		end
	end
end
function Queue:RemoveFromQueue()
	
	table.insert(self.Called, self.ToCall[1])
	self:AdjustQueue()
	
end


function Queue:Enqueue(Action: Function, TimeBeforeNextCall: number, OnCallFunction: Function)

	local QueueSignal = Signal.new()
	local QueueInformation = {
		ID = HttpService:GenerateGUID(),
		
		Action = Action, 
		TimeBeforeNextCall = TimeBeforeNextCall or 0, 
		Signal = QueueSignal
	}

	table.insert(self.ToCall, QueueInformation)
	task.defer(self.AttemptManage, self)
	
	return QueueSignal
end


function Queue:AttemptManage()
	if #self.ToCall >= 1 and self.CanCall then
		self:ManageQueue()
	end
end

function Queue:AttemptWait(TimeBeforeNextCall: number)
	if TimeBeforeNextCall > 0 then
		task.wait(TimeBeforeNextCall)
	end
end

function Queue:ManageQueue()
	self.CanCall = false
	
	local Action: Function = self.ToCall[1].Action
	local Signal: {} = self.ToCall[1].Signal
	
	local TimeBeforeNextCall = (self.ToCall[1].TimeBeforeNextCall)
	
	
	Signal:Fire() -- Queue-Specific Calling Signal
	self.Calling:Fire() -- General Calling Signal
	Action()
	
	self:RemoveFromQueue(1)
	self:AttemptWait(TimeBeforeNextCall)
	
	self.CanCall = true
	
	self:AttemptManage()
	
end

return Queue