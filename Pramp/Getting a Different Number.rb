# https://www.pramp.com/challenge/aK6V5GVZ9MSPqvG1vwQp

require 'set'

def get_different_number(arr)
  set1 = Set.new(arr)
  p
  arr.length.times do |i|
    return (i) unless set1.include?(i)
  end
  arr.length
end

# finds the smallest nonnegative integer that is NOT in the array
