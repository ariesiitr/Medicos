from patient.models import BlockMail
from patient.models import BlockNumber
def block_mail(mail,number):
    
    if (BlockMail.objects.filter(blockmail=mail).exists()) or (BlockNumber.objects.filter(blocknumber=number).exists()) :
        return True
         
    else:
        return False