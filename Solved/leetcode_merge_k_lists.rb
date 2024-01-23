# https://leetcode.com/problems/merge-k-sorted-lists/description/
def merge_k_lists(lists)
    result = []
    lists.each do |list|
        _current = list
        until _current == nil do
            result.push(_current.val)
            _current = _current.next
        end
    end
    result.sort
end
console.log('smile');
