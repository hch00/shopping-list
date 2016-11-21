var state
{
	var shoppingItems = [];
}

function shoppingItem(itemName)
{
	return
	{
		itemName : itemName;
		isChecked : false;
	}
}

function changeToggle(event) 
{
	var spanTitle = $(event.currentTarget).parent().siblings('.shopping-item');
	if(spanTitle.hasClass('shopping-item__checked'))
		spanTitle.removeClass('shopping-item__checked');
	else
		spanTitle.addClass("shopping-item__checked");
	
}

function addItem(itemName)
{
	shoppingItems.push(shoppingItem(itemName));
	$(".shopping-list").append('<li><span class="shopping-item">' + itemName + '</span><div class="shopping-item-controls"><button class="shopping-item-toggle">\
            <span class="button-label">check</span>\
          </button>\
          <button class="shopping-item-delete">\
            <span class="button-label">delete</span>\
          </button>\
        </div>\
      </li>\
      ');
}

function deleteItem(event)
{
	$(event.currentTarget).closest('li').remove();
}
$(document).ready(function()
{
	$("#js-shopping-list-form").submit(function(event)
	{
		event.preventDefault();
		addItem($("#shopping-list-entry").val());
	});

	$('.shopping-list').on('click' , '.shopping-item-toggle' , function(event)
	{
		event.preventDefault();
		changeToggle(event);
	});

	$('.shopping-list').on('click' , '.shopping-item-delete' , function(event)
	{
		event.preventDefault();
		deleteItem(event);
	});
});