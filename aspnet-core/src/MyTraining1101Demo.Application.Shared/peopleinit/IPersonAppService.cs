using Abp.Application.Services;
using Abp.Application.Services.Dto;
using MyTraining1101Demo.peopleinit.DTO;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace MyTraining1101Demo.peopleinit
{
    public interface IPersonAppService : IApplicationService
    {
        ListResultDto<PersonListDto> GetPeople(GetPeopleInput input);
        Task CreatePerson(CreatePersonInput input);

        Task DeletePerson(EntityDto input);

        Task<PhoneInPersonListDto> AddPhone(AddPhoneInput input);

        Task DeletePhone(EntityDto<long> input);

    }

}
